import NavigationBar from "./components/NavigationBar"

export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div>
        <NavigationBar/>
      </div>
      <div className="mt-10">
        <h1>Some content</h1>
        <p>The standard Lorem Ipsum passage, used since the 1500s</p>
      </div>
    </div>
  )
}