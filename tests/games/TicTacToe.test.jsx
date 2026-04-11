import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TicTacToe from '../../src/components/games/TicTacToe'

// Mock framer-motion since it can be problematic in JSDOM
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }) => <div>{children}</div>,
}))

describe('TicTacToe', () => {
  it('renders the game title', () => {
    render(<TicTacToe />)
    expect(screen.getByText('TIC TAC TOE')).toBeInTheDocument()
  })

  it('initially renders an empty board', () => {
    render(<TicTacToe />)
    const buttons = screen.getAllByRole('button')
    // 2 for mode selector, 9 for board, 1 for reset = 12 buttons
    // The board buttons don't have text initially
    const boardButtons = buttons.filter(b => b.className.includes('h-24'))
    expect(boardButtons.length).toBe(9)
    boardButtons.forEach(button => {
      expect(button).toHaveTextContent('')
    })
  })

  it('marks a square with X when clicked', () => {
    render(<TicTacToe />)
    const boardButtons = screen.getAllByRole('button').filter(b => b.className.includes('h-24'))
    fireEvent.click(boardButtons[0])
    expect(boardButtons[0]).toHaveTextContent('X')
  })

  it('resets the game when reset button is clicked', () => {
    render(<TicTacToe />)
    const boardButtons = screen.getAllByRole('button').filter(b => b.className.includes('h-24'))
    fireEvent.click(boardButtons[0])
    expect(boardButtons[0]).toHaveTextContent('X')
    
    const resetButton = screen.getByText('Reset Game')
    fireEvent.click(resetButton)
    expect(boardButtons[0]).toHaveTextContent('')
  })

  it('toggles between Vs Robot and PVP modes', () => {
    render(<TicTacToe />)
    const pvpButton = screen.getByText('Player Vs Player')
    const vsRobotButton = screen.getByText('Vs Robot 🤖')
    
    fireEvent.click(pvpButton)
    expect(screen.getByText('Player 2')).toBeInTheDocument()
    
    fireEvent.click(vsRobotButton)
    // In vs robot mode, it might say "Robot"
    expect(screen.getByText('Robot')).toBeInTheDocument()
  })
})
