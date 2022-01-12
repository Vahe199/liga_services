import React from 'react';
import ExperienceBlockEdit from "./ExperienceBlockEdit";
import ExperienceBlockData from "./ExperienceBlockData";

const ExperienceBlock = ({editExperienceBlock, setEditExperienceBlock}) => {

    return (
        <>
            {editExperienceBlock ? <ExperienceBlockEdit setEditExperienceBlock={setEditExperienceBlock}/>
            :<ExperienceBlockData setEditExperienceBlock={setEditExperienceBlock}/>}
             </>
    )
}

export default ExperienceBlock;
