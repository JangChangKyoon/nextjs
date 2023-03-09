import NavBar from "../components/NavBar";

export default function Home() {
  return (
    // styles jsx 해당 컴포넌트 내에서만 작동하므로 아래 코드들은 적용되지 않음
    <div>
      <NavBar />
      <h1 className="active">Hello</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
