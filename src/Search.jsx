import { FormControl, InputGroup } from "react-bootstrap";

const Search = ({onChangeQuery}) => {
    return (
        <InputGroup className="mb-3 m-5">
        <FormControl
          placeholder="Search articles by query..."
          onChange={onChangeQuery}
        />
      </InputGroup>
    );
  };
  export default Search;
  