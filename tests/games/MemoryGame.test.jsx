import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import MemoryGame from '../../src/components/games/MemoryGame'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}))

describe('MemoryGame', () => {
  it('renders the game title', () => {
    render(<MemoryGame />)
    expect(screen.getByText('Memory Match')).toBeInTheDocument()
  })

  it('renders initial number of moves and matches', () => {
    render(<MemoryGame />)
    expect(screen.getByText(/Moves: 0/)).toBeInTheDocument()
    expect(screen.getByText(/Matches: 0 \/ 8/)).toBeInTheDocument()
  })

  it('renders 16 cards', () => {
    const { container } = render(<MemoryGame />)
    // Each card is a motion.div which we mocked as a div. 
    // The component uses grid-cols-4.
    // Let's count the elements with onClick.
    const cards = container.querySelectorAll('.cursor-pointer')
    expect(cards.length).toBe(16)
  })

  it('increments moves when two cards are clicked', () => {
    render(<MemoryGame />)
    const cards = screen.getAllByRole('generic').filter(el => el.className.includes('cursor-pointer'))
    
    fireEvent.click(cards[0])
    fireEvent.click(cards[1])
    
    expect(screen.getByText(/Moves: 1/)).toBeInTheDocument()
  })

  it('restarts the game when restart button is clicked', () => {
    render(<MemoryGame />)
    const cards = screen.getAllByRole('generic').filter(el => el.className.includes('cursor-pointer'))
    
    fireEvent.click(cards[0])
    fireEvent.click(cards[1])
    expect(screen.getByText(/Moves: 1/)).toBeInTheDocument()
    
    const restartButton = screen.getByText('Restart Game')
    fireEvent.click(restartButton)
    expect(screen.getByText(/Moves: 0/)).toBeInTheDocument()
  })
})
