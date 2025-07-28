export function Button({ children, variant = 'default', style = {}, ...props }) {
  const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    border: variant === 'outline' ? '2px solid #D97706' : 'none',
    backgroundColor: variant === 'outline' ? 'transparent' : '#D97706',
    color: variant === 'outline' ? '#D97706' : 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    margin: '0.2rem',
    ...style
  };
  return <button style={baseStyle} {...props}>{children}</button>;
}
