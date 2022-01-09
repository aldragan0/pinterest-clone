
export function ErrorBar({ message, closeMessage }: any) {
  return (
    <div className="error-bar">
      <p>{message}</p>
      <span onClick={closeMessage}>&times;</span>
    </div>
  )
}