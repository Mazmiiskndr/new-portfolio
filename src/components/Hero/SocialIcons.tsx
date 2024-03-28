import { FC } from "react";
import { Button } from "@nextui-org/react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SocialIcons: FC = () => {
  return (
    <>
      <div className="mb-3">
        <Button
          radius="full"
          color="default"
          variant="ghost"
          size="lg"
          isIconOnly
        >
          <FaInstagram size={25} />
        </Button>
      </div>
      <div className="mb-3">
        <Button
          radius="full"
          color="default"
          variant="ghost"
          size="lg"
          isIconOnly
        >
          <FaFacebookF size={23} />
        </Button>
      </div>
      <div className="mb-4">
        <Button
          radius="full"
          color="default"
          variant="ghost"
          size="lg"
          isIconOnly
        >
          <FaLinkedinIn size={23} />
        </Button>
      </div>
    </>
  );
};

export default SocialIcons;
