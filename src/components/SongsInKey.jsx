import { useState } from "react";
import "../styles/SongsInKey.css";
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";

const SongsInKey = ({ songKey, songsList }) => {

    return (
        <List
            className="song-list"
            sx={{
                maxHeight: 600,
                overflow: "auto",
            }}
            subheader={<ListSubheader>{`${songKey}: ${songsList.length} songs`}</ListSubheader>}
        >
            {songsList.map((song) => {
                return (
                    
                    <ListItem>
                        <ListItemText primary={`- ${song}`}></ListItemText>
                    </ListItem>
                )
            })}
        </List>
    );
};

export default SongsInKey;
