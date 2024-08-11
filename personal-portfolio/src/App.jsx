import NavigationBar from "./components/NavigationBar"

export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div>
        <NavigationBar/>
      </div>
      <div className="mt-10">
        <div className="h-[400px] w-screen bg-red-500"></div>
        <h1 className="text-center">Hi there</h1>
        <div className="flex flex-row w-screen">
          <div className = "text-center w-1/2">Jimmy is here</div>
          <div className="text-center w-1/2">Tommy is here</div>
        </div>
      </div>
    </div>
  )
}