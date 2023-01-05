import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
export default function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <GoBell />
          betfeg
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          gtehtrtrh
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          kikyy
        </Button>
      </div>
      <div>
        <Button success>juj545r4</Button>
      </div>
      <div>
        <Button secondary>ngdndgdfh</Button>
      </div>
    </div>
  );
}
