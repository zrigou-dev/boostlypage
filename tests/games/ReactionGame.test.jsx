import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ReactionGame from '../../src/components/games/ReactionGame'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }) => <div>{children}</div>,
}))

describe('ReactionGame', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the game title', () => {
    render(<ReactionGame />)
    expect(screen.getByText('REACTION TEST')).toBeInTheDocument()
  })

  it('shows the start test button initially', () => {
    render(<ReactionGame />)
    expect(screen.getByText('START TEST')).toBeInTheDocument()
  })

  it('transitions to waiting state when clicked', () => {
    const { container } = render(<ReactionGame />)
    const arena = container.querySelector('.rounded-2xl.flex.items-center.justify-center')
    fireEvent.mouseDown(arena)
    expect(screen.getByText('WAIT FOR GREEN...')).toBeInTheDocument()
  })

  it('shows too early if clicked during waiting state', () => {
    const { container } = render(<ReactionGame />)
    const arena = container.querySelector('.rounded-2xl.flex.items-center.justify-center')
    
    act(() => {
      fireEvent.mouseDown(arena) // Start
    })
    act(() => {
      fireEvent.mouseDown(arena) // Too early
    })
    
    expect(screen.getByText('Too Early!')).toBeInTheDocument()
  })

  it('transitions to green state after a delay', () => {
    const { container } = render(<ReactionGame />)
    const arena = container.querySelector('.rounded-2xl.flex.items-center.justify-center')
    
    fireEvent.mouseDown(arena)
    
    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(5000) 
    })
    
    expect(screen.getByText('CLICK NOW!')).toBeInTheDocument()
  })
})
