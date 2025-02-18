import { Switch } from "../ui/switch";
import { InputGroup } from "../ui/input-group";
import { Flex, Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { ColorModeButton, useColorMode } from "../ui/color-mode";
import { useRef } from "react";

interface Props {
  searchOnChange: (keyword: string) => void;
  searchKeyword?: string;
}

const Header = ({ searchOnChange, searchKeyword }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <header>
      <Flex gap="3" align="center">
        <Image
          src="https://bit.ly/naruto-sage"
          boxSize="50px"
          borderRadius="full"
          fit="cover"
          alt="Game Hub"
        />
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            if (searchRef.current) {
              searchOnChange(searchRef.current.value);
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
