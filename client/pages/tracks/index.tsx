import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '@/components/TrackList';

const index = () => {
	const router = useRouter();
	const tracks: ITrack = [
		{
			_id: '1',
			name: 'Трек 1',
			artist: 'Испольнитель 1',
			text: 'Какой-то текст',
			listens: 5,
			audio: 'http://localhost:5000/audio/3495.mp3',
			picture: 'http://localhost:5000/picture/1.jpg',
			comments: []
		},
		{
			_id: '2',
			name: 'Трек 2',
			artist: 'Испольнитель 2',
			text: 'Какой-то текст',
			listens: 5,
			audio: 'http://localhost:5000/audio/3495.mp3',
			picture: 'http://localhost:5000/picture/2.jpg',
			comments: []
		},
		{
			_id: '3',
			name: 'Трек 3',
			artist: 'Испольнитель 3',
			text: 'Какой-то текст',
			listens: 5,
			audio: 'http://localhost:5000/audio/3495.mp3',
			picture: 'http://localhost:5000/picture/3.jpg',
			comments: []
		}
	];

	return (
		<MainLayout>
			<Grid container justifyContent={'center'}>
				<Card style={{ width: 900 }}>
					<Box p={3}>
						<Grid container justifyContent={'space-between'}>
							<h1>Список треков</h1>
							<Button
								onClick={() => router.push('/tracks/create')}>
								Загрузить
							</Button>
						</Grid>
					</Box>
					<TrackList tracks={tracks} />
				</Card>
			</Grid>
		</MainLayout>
	);
};

export default index;
