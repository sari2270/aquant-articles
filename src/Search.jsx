import { Container, FormControl, InputGroup } from "react-bootstrap";

const Search = ({ onChangeQuery }) => {
  return (
    <Container>
      <InputGroup className="mb-3 my-5">
        <FormControl
          placeholder="Search articles by query..."
          onChange={onChangeQuery}
        />
      </InputGroup>
    </Container>
  );
};
export default Search;
