import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Slider from "./components/Slider/Slider";

function App() {
  const statsData = [
    { name: "Meciuri", value: 97, displayValue: 0 },
    { name: "Victorii", value: 77, displayValue: 0 },
    { name: "Knockouts", value: 26, displayValue: 0 },
    { name: "Înfrângeri", value: 20, displayValue: 0 },
  ];
  return (
    <>
      <Nav />
      <Hero />
      <Stats initialStats={statsData} />
      <Slider />
    </>
  );
}

export default App;
