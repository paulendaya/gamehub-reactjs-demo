import { Switch } from "../ui/switch";
import { InputGroup } from "../ui/input-group";
import { Flex, Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { ColorModeButton, useColorMode } from "../ui/color-mode";

interface Props {
  searchOnChange: (value: string) => void;
  searchKeyword: string;
}

const Header = ({
  searchOnChange,
  searchKeyword,
}: Props) => {
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
        <InputGroup width="full" flex="1" startElement={<LuSearch />}>
          <Input
            size="lg"
            placeholder="Search games"
            color="white"
            colorScheme="gray"
            value={searchKeyword}
            type="search"
            onChange={(event) => searchOnChange(event.currentTarget.value)}
          />
        </InputGroup>
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
