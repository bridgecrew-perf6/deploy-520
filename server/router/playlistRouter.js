import express from 'express'
const router = express.Router()
import { protect } from '../middlewares/authMiddleware.js'
import {getMyPlaylist, addMovie,createMyPlaylist,getPlaylistById} from '../controllers/playlistController.js'


router.route('/create').post(protect,createMyPlaylist)
router.route('/:id').get(protect,getMyPlaylist).post(protect,addMovie)
router.route('/movies/:id').get(protect,getPlaylistById)

export default router