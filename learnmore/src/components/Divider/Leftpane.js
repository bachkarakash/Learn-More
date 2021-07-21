import React from 'react';
import { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { useGatsbyNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/gatsby';
import NestedMenu from '@mui-treasury/components/menu/nested';


export default class extends Component {
    
    render() {
        return (
            <Fragment>
                <h1>Left Pane</h1>
            </Fragment>
        );
    }
}

// export const Leftpane = () => {
//     state
//     return (
//       <Box >
//         {/* <NestedMenu menus={content} useStyles={useGatsbyNestedMenuStyles} /> */}
//         <NestedMenu />
//       </Box>
//     );
// };

// export default Leftpane;