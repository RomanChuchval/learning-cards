import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import { Eye } from "common";
import Box from "@mui/material/Box";

type PasswordInputType = {
    label: string;
};

export const PasswordInput: FC<PasswordInputType> = ({ label }) => {
    return (
        <Box sx={{ mt: "30px", position: "relative" }}>
            <TextField label={label} type={"password"} name={"email"} variant="standard" fullWidth={true} />
            <Box sx={{ position: "absolute", right: "0", top: "10px" }}>
                <Eye />
            </Box>
        </Box>
    );
};

// <Box sx={{
//     width: '100%',
//     lineHeight: '24px',
//     marginTop: '30px',
//     position: 'relative',
// }}>
//     <TextField
//         label={label}
//         type={"password"}
//         name={"email"}
//         variant="standard"
//         fullWidth={true}
//     />
//     <Box sx={{
//         position: 'absolute',
//         right: '0',
//         top: '10px',
//     }}>
//         <Eye />
//     </Box>
// </Box>
