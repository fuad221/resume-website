import React from 'react'
import { Profile,  Skills, Experiences, Educations, Portfolios} from '../../reference-import'
import About from './About'

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
}

export default Home
