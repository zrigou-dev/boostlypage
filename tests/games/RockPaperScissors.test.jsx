import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import RockPaperScissors from '../../src/components/games/RockPaperScissors'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => <div>{children}</div>,
}))

describe('RockPaperScissors', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the game title', () => {
    render(<RockPaperScissors />)
    expect(screen.getByText('RPC BATTLE')).toBeInTheDocument()
  })

  it('displays initial scores', () => {
    render(<RockPaperScissors />)
    const scores = screen.getAllByRole('generic').filter(el => el.className.includes('text-3xl font-bold'))
    // There are two scores (Player and Computer)
    expect(scores[0]).toHaveTextContent('0')
    expect(scores[1]).toHaveTextContent('0')
  })

  it('enables choice buttons initially', () => {
    render(<RockPaperScissors />)
    const buttons = screen.getAllByRole('button').filter(b => b.className.includes('w-16 h-16'))
    expect(buttons.length).toBe(3)
    buttons.forEach(button => {
      expect(button).not.toBeDisabled()
    })
  })

  it('results in a game outcome after clicking a choice', () => {
    render(<RockPaperScissors />)
    const rockButton = screen.getAllByRole('button').filter(b => b.className.includes('w-16 h-16'))[0]
    
    fireEvent.click(rockButton)
    
    // Simulate delay
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    
    // Check if result exists (win, lose, or draw)
    const resultElement = screen.getByText(/win|lose|draw/i)
    expect(resultElement).toBeInTheDocument()
  })
})
