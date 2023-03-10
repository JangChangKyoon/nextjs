import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  // console.log(router);  // url이 전하는 데이터를 콘솔로 볼 수 있다.

  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
