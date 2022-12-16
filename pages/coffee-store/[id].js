import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
    const router = useRouter();
    return (
        <div>
        Coffee Store Page {router.query.id}
        <Link legacyBehavior href="/">
          <a>Back to home</a>
        </Link>
        <Link legacyBehavior href="/coffee-store/dynamic">
          <a>Go to page dynamic</a>
        </Link>
      </div>
    );
}

export default CoffeeStore;