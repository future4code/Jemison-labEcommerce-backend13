import { character } from './../types';
import { Request, Response } from "express";
import connection from '../connection';




export const getAllCharacters = async (req: Request, res: Response): Promise<void> => {

    try {
        const characters: character[] = await connection("character")
        res.send(characters)
    } catch (error) {
        res.status(500).send("Unexpected server error!")
    }
}