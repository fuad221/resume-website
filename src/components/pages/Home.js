import React from 'react'
import { About, Profile,  Skills, Experiences, Educations, Portfolios} from '../../reference-import';

const Home = () => {
		return (
			<section>
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<Experiences />
							<Educations />
							<Portfolios />
						</div>
					</div>
				</div>
			</section>
		);
};

export default Home
