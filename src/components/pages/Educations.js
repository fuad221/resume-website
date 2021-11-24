import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


const Educations = () => {
    return (
        <div>
            <div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Web Development</td>
								<td>Jan 2020</td>
								<td>
									<Link to='/educationdetails' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Graphic Design</td>
								<td>May 2020</td>
								<td>
									<Link to='/educationdetails' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Tech Gadgets</td>
								<td>June 2020</td>
								<td>
									<Link to='/educationdetails' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Other</td>
								<td>Dec 2020</td>
								<td>
									<Link to='/educationdetails' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
        </div>
    )
}

export default Educations
