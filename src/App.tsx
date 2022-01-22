import React from 'react';
import { H, Tag, Button } from './components';
import styles from './App.module.scss';

const App = () => {
	return <main className={styles.main}>
		<div className={styles.box_container}>
			<h2>Tags</h2>

			<Tag>white</Tag>
			<Tag bg='red' color='white'>red</Tag>
			<Tag bg='gray' color='white'>gray</Tag>
			<Tag bgHex='#4fbeac' color='black'>#4fbeac</Tag>
			<Tag bg='black' color='white'>black</Tag>
			<Tag bg='green' color='white'>green</Tag>
			<Tag bg='blue' color='white'>blue</Tag>
		</div>
		<div className={styles.box_container}>
			<h2>Headers</h2>

			<H>Lorem ipsum dolor sit amet consectetur adipisicing.</H>
			<H size='m'>Lorem ipsum dolor sit amet consectetur adipisicing.</H>
			<H size='l'>Lorem ipsum dolor sit amet consectetur adipisicing.</H>
		</div>
		<div className={styles.box_container}>
			<h2>Buttons</h2>

			<Button className={styles.mr10} color='black'>test</Button>
			<Button className={styles.mr10} boxShadow={true}>shadow</Button>
			<Button className={styles.mr10} radiusType='rounded'>rounded</Button>
			<Button className={styles.mr10} radiusType='square' boxShadow={true}>square</Button>
			<Button className={styles.mr10} radiusType='rounded' boxShadow={true} color='#1ca531' >square</Button>
			<Button className={styles.mr10} radiusType='square' boxShadow={true} color='gray' border={true}>square</Button>

		</div>
	</main>;
};

export default App;
