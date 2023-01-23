import React from 'react';
import { ITrack } from '@/types/track';
import MainLayout from '@/layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {
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
	const router = useRouter();

	return (
		<MainLayout>
			<Button
				onClick={() => router.push('/tracks')}
				variant={'outlined'}
				style={{ fontSize: 32 }}>
				К списку
			</Button>
			<Grid
				container
				style={{ margin: '20px 0px', alignItems: 'center' }}>
				<img src={track.picture} width={200} height={200} />
				<div style={{ marginLeft: 30 }}>
					<h1>Название трека - {track.name}</h1>
					<h1>Исполнитель - {track.artist}</h1>
					<h1>Прослушиваний - {track.listens}</h1>
				</div>
			</Grid>
			<h1>Слова к треку</h1>
			<p>{track.text}</p>
			<h1>Комментарии</h1>
			<Grid container>
				<TextField label='Ваше имя' fullWidth />
				<TextField label='Комментарий' fullWidth multiline rows={4} />
				<Button>Отправить</Button>
			</Grid>
			<div>
				{track.comments.map(comment => (
					<div>
						<div>Автор - {comment.username}</div>
						<div>Комментарий - {comment.text}</div>
					</div>
				))}
			</div>
		</MainLayout>
	);
};

export default TrackPage;
