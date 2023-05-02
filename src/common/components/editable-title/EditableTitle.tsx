import React, { ChangeEvent, FC, useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { SuperButton } from "common";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

type EditableTitlePropsType = {
    title: string;
    margin?: string;
};

export const EditableTitle: FC<EditableTitlePropsType> = ({ title, margin }) => {
    const [value, setValue] = useState<string>(title);
    const [editMode, setEditMode] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const handleSetEditor = () => {
        setEditMode(!editMode);
    };

    return (
        <Box sx={{ margin: margin }}>
            {!editMode ? (
                <Typography sx={{ fontSize: "20px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                    {value}
                    <IconButton onClick={handleSetEditor}>
                        <BorderColorIcon sx={{ color: "#000", fontSize: "20px" }} />
                    </IconButton>
                </Typography>
            ) : (
                <TextField
                    label="Nickname"
                    value={value}
                    autoFocus
                    name={"text"}
                    variant="standard"
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <SuperButton
                                name={"Save"}
                                callback={handleSetEditor}
                                textColor={"white"}
                                margin={"0 0 5px 0"}
                            />
                        ),
                    }}
                />
            )}
        </Box>
    );
};
