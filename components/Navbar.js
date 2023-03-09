import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <span className={router.pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link href="/about" legacyBehavior>
        <span className={router.pathname === "/about" ? "active" : ""}>
          About
        </span>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          // 지금 최신버전으로 적용 안 됨.. Link가 가지고 있는 밑줄을 인식 못 함
          // 이를 해결하려면 legacyBehavior속성 추가해줌
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
