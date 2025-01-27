import { Switch } from "../ui/switch";
import { InputGroup } from "../ui/input-group";
import { Flex, Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useEffect } from "react";

interface Props {
  theme: string;
  onChangeTheme: (event: React.FormEvent<HTMLLabelElement>) => void;
  searchOnChange: (value: string) => void;
  searchKeyword: string;
}

const Header = ({
  theme,
  onChangeTheme,
  searchOnChange,
  searchKeyword,
}: Props) => {
  useEffect(() => {
    document.body.classList.remove(theme === "light" ? "dark" : "light");
    document.body.classList.add(theme);
  });

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
        <Switch
          colorPalette="teal"
          onChange={(event) => onChangeTheme(event)}
          defaultChecked
        />
      </Flex>
    </header>
  );
};

export default Header;
