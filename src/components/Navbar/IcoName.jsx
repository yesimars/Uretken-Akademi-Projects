import { AnaLink } from "./AnaLink";
import { Button } from "./Button";
import { StyledContainer } from "./IcoNameSty"
import { GiMusicSpell } from "react-icons/gi";
import { Search } from "./Search";


function IcoName() {
    return (

        <StyledContainer >
                <GiMusicSpell style={{
                    fontSize: "30px"
                }} />Harmosync
                <AnaLink/>
                <Search/>
                <Button $primary/>
        </StyledContainer>

    )
}

export default IcoName