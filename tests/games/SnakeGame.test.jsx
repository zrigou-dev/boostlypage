import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SnakeGame from '../../src/components/games/SnakeGame'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
}))

describe('SnakeGame', () => {
  it('renders the game title', () => {
    render(<SnakeGame />)
    expect(screen.getByText('SNAKE RUN')).toBeInTheDocument()
  })

  it('shows the start game button initially', () => {
    render(<SnakeGame />)
    expect(screen.getByText('START GAME')).toBeInTheDocument()
  })

  it('starts the game when start button is clicked', () => {
    render(<SnakeGame />)
    const startButton = screen.getByText('START GAME')
    fireEvent.click(startButton)
    expect(screen.queryByText('START GAME')).not.toBeInTheDocument()
  })

  it('displays the initial score', () => {
    render(<SnakeGame />)
    expect(screen.getByText('SCORE:')).toBeInTheDocument()
    const scores = screen.getAllByText('0')
    expect(scores.length).toBeGreaterThanOrEqual(2) // Score and Best
  })
})
