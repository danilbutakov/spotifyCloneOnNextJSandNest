import React from 'react';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import styles from '../styles/Player.module.scss';
import { ITrack } from '@/types/track';
import { Grid } from '@mui/material';
import TrackProgress from '@/components/TrackProgress';

const Player = () => {
	const active = false;
	const track: ITrack = {
		_id: '3',
		name: 'Трек 3',
		artist: 'Испольнитель 3',
		text: 'Какой-то текст',
		listens: 5,
		audio: 'http://localhost:5000/audio/3495.mp3',
		picture: 'http://localhost:5000/picture/3.jpg',
		comments: []
	};
	return (
		<div className={styles.player}>
			<IconButton onClick={e => e.stopPropagation()}>
				{active ? <Pause /> : <PlayArrow />}
			</IconButton>
			<Grid
				container
				direction='column'
				style={{ width: 200, margin: '0 20px' }}>
				<div>{track.name}</div>
				<div style={{ fontSize: 12, color: 'gray' }}>
					{track.artist}
				</div>
			</Grid>
			<TrackProgress left={0} right={100} onChange={() => ({})} />
			<VolumeUp style={{ marginLeft: 'auto' }} />
			<TrackProgress left={0} right={100} onChange={() => ({})} />
		</div>
	);
};

export default Player;
