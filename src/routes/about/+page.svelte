<script lang="ts">
	const team = [
	  { name: "Dr. Jane Smith", role: "Founder & CEO", image: "/team/jane-smith.jpg" },
	  { name: "Prof. John Doe", role: "Chief Scientific Officer", image: "/team/john-doe.jpg" },
	  { name: "Sarah Johnson", role: "Lead Developer", image: "/team/sarah-johnson.jpg" },
	  { name: "Michael Chen", role: "UX Designer", image: "/team/michael-chen.jpg" }
	];
  </script>
  
  <svelte:head>
	<title>About Us - AcademiTech</title>
  </svelte:head>
  
  <div class="container">
	<h1 class="gradient-text">About AcademiTech</h1>
  
	<section class="mission ">
	  <h2>Our Mission</h2>
	  <p>At AcademiTech, we're dedicated to empowering researchers with cutting-edge tools that streamline the research process, foster collaboration, and accelerate scientific discovery. Our mission is to bridge the gap between technology and academia, providing innovative solutions that address the unique challenges faced by researchers across disciplines.</p>
	
  
  
	  <p>For more of our philosophy, read our <a href="/blog/manifesto" class="text-secondary">manifesto</a> </p>
	</section>
  
	<section class="team">
	  <h2 class="gradient-text">Meet Our Team</h2>
	  <div class="team-grid">
		{#each team as member, index}
		  <div class="team-member card" style="animation-delay: {index * 0.1}s">
			<img src={member.image} alt={member.name} />
			<h3>{member.name}</h3>
			<p>{member.role}</p>
		  </div>
		{/each}
	  </div>
	</section>
    <p>why we assembled</p>
	<section class="contact card">
	  <h2>Get in Touch</h2>
	  <p>Interested in learning more about our software or have questions? We'd love to hear from you!</p>
	  <a href="mailto:info@academitech.com" class="contact-button">Contact Us</a>
	</section>
  </div>
  
  <style>
	h1, h2 {
	  text-align: center;
	}
  
	h1 {
	  margin: 4rem 0;
	  font-size: 3rem;
	}
  
	.mission, .team, .contact {
	  margin-bottom: 4rem;
	}
  
	.team-grid {
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	  gap: 2rem;
	}
  
	.team-member {
	  text-align: center;
	  animation: fadeInUp 0.5s ease-out both;
	}
  
	.team-member img {
	  width: 150px;
	  height: 150px;
	  border-radius: 50%;
	  object-fit: cover;
	  margin-bottom: 1rem;
	  border: 3px solid var(--primary-color);
	  transition: transform 0.3s ease;
	}
  
	.team-member:hover img {
	  transform: scale(1.05);
	}
  
	.contact {
	  text-align: center;
	}
  
	.contact-button {
	  display: inline-block;
	  background-color: var(--primary-color);
	  color: white;
	  padding: 0.8rem 1.5rem;
	  border-radius: 30px;
	  font-weight: bold;
	  text-transform: uppercase;
	  letter-spacing: 1px;
	  transition: all 0.3s ease;
	  margin-top: 1rem;
	}
  
	.contact-button:hover {
	  background-color: var(--accent-color);
	  transform: translateY(-2px);
	  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
  
	@keyframes fadeInUp {
	  from {
		opacity: 0;
		transform: translateY(20px);
	  }
	  to {
		opacity: 1;
		transform: translateY(0);
	  }
	}
  
	@media (max-width: 768px) {
	  .team-grid {
		grid-template-columns: repeat(2, 1fr);
	  }
	}
  </style>
  