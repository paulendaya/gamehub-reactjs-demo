import { Switch } from "../ui/switch";
import { InputGroup } from "../ui/input-group";
import { Flex, Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { ColorModeButton, useColorMode } from "../ui/color-mode";
import { useRef } from "react";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchKeyword = useGameQueryStore((s) => s.setSearchKeyword);
  const { toggleColorMode, colorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <header>
      <Flex gap="3" align="center">
        <Link to={"/"}>
          <Image
            src="https://bit.ly/naruto-sage"
            boxSize="50px"
            borderRadius="full"
            fit="cover"
            alt="Game Hub"
          />
        </Link>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            if (searchRef.current) {
              setSearchKeyword(searchRef.current.value);
              navigate("/");
            }
          }}
        >
          <InputGroup width="full" flex="1" startElement={<LuSearch />}>
            <Input
              size="lg"
              placeholder="Search games"
              color="white"
              colorScheme="gray"
              type="search"
              ref={searchRef}
            />
          </InputGroup>
        </form>
        <div className="d-md-block d-none">
          <Flex gap="3" align="center">
            <Switch
              colorPalette="teal"
              onChange={toggleColorMode}
              checked={colorMode == "dark" ? true : false}
            />
            <div>Dark Mode</div>
          </Flex>
        </div>

        <div className="d-md-none d-block">
          <ColorModeButton />
        </div>
      </Flex>
    </header>
  );
};

export default Header;
