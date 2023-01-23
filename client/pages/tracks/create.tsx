import MainLayout from '@/layouts/MainLayout';
import React, { useState } from 'react';
import StepWrapper from '@/components/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import FileUpload from '@/components/FileUpload';

const Create = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [picture, setPicture] = useState(null);
	const [audio, setAudio] = useState(null);

	const next = () => {
		if (activeStep !== 2) {
			setActiveStep(prev => prev + 1);
		}
	};

	const back = () => {
		setActiveStep(prev => (activeStep === 0 ? prev : prev - 1));
	};

	return (
		<MainLayout>
			<StepWrapper activeStep={activeStep}>
				{activeStep === 0 && (
					<Grid
						container
						direction={'column'}
						style={{ padding: 20 }}>
						<TextField
							label={'Название трека'}
							style={{ marginTop: 10 }}
						/>
						<TextField
							label={'Имя автора'}
							style={{ marginTop: 10 }}
						/>
						<TextField
							label={'Текст к песне'}
							multiline
							rows={3}
							style={{ marginTop: 10 }}
						/>
					</Grid>
				)}
				{activeStep === 1 && (
					<FileUpload setFile={setPicture} accept={'image/*'}>
						<Button>Загрузите обложку</Button>
					</FileUpload>
				)}
				{activeStep === 2 && (
					<FileUpload setFile={setAudio} accept={'audio/*'}>
						<Button>Загрузите аудио</Button>
					</FileUpload>
				)}
			</StepWrapper>
			<Grid container justifyContent={'space-between'}>
				<Button onClick={back}>Назад</Button>
				<Button onClick={next}>Дадее</Button>
			</Grid>
		</MainLayout>
	);
};

export default Create;
