<script lang="ts">
	import { quintOut } from "svelte/easing";
	import { slide } from "svelte/transition";

 
 const highlightedFeatures = {
    notebook: [
    {
      title: "References",
      description: "Keep things connected for yourself and future scientists, by referencing entities in your lab, like inventory items. References also allow you two ",
      image: "/images/data-analysis-hero.jpg"
    },
    {
      title: "Reviews",
      description: "Your colleagues can look at your work and give you feedback",
      image: "/images/collaboration-hero.jpg"
    },
    {
      title: "Activity",
      description: "See activity and connections relationships to your notebook while you're writing",
      image: "/images/collaboration-hero.jpg"
    },
  ],
  missions: [
    {
      title: "Keep the lab running smoothly",
      description: "Know what work needs to be done and when",
      image: "/images/collaboration-hero.jpg"
    },
    {
      title: "Missions allow you to keep track of recurring tasks in your lab",
      description: "Know what work needs to be done and when",
      image: "/images/collaboration-hero.jpg"
    },
  ],
  activity: [
    {
      title: "Adjustible granularity",
      description: "Get a more summarized activity for the week, for a specific user, or see all the activity for an inventory item",
      image: "/images/collaboration-hero.jpg"
    },
    {
      title: "Engagable",
      description: "Comment, react, or link to activity",
      image: "/images/collaboration-hero.jpg"
    },
  ],
  inventory: [
    {
      title: "",
      description: "Know what work needs to be done and when",
      image: "/images/collaboration-hero.jpg"
    },
  ],
 }

  const features = [
    {
      title: "Inspect everything",
      description: "All activity and elements can be inspected. Each 'entity' in Liminal can be inspected where you can see its relationships, history, actions, alerts, and statistics. Like playing https://en.wikipedia.org/wiki/Wikiracing with your research",
      icon: "🔍",
      details: "Using natural language processing and machine learning, our literature review tool can analyze thousands of papers in minutes. It provides smart summaries, citation networks, and identifies research gaps to accelerate your literature review process.",
      image: "/images/literature-review-screenshot.jpg"
    },
    {
      title: "Search",
      description: "You can search for anything in the app, from users, inventory, papers, and app activity",
      icon: "📅",
      details: "Design and automate your research workflows with our intuitive drag-and-drop interface. Set up triggers, notifications, and integrate with external tools to create a seamless research process tailored to your needs.",
      image: "/images/workflow-screenshot.jpg"
    },
    {
      title: "Shared spaces",
      description: "A group of people are organized into a lab where their shared resources and research is contained",
      icon: "🔒",
      details: "Our secure data storage solution uses AES-256 encryption and complies with GDPR and HIPAA regulations. With automated backups and granular access controls, your research data is always safe and accessible only to authorized team members.",
      image: "/images/secure-storage-screenshot.jpg"
    }
  ];
 

  let expandedFeature: number | null = null;

function toggleFeature(index: number) {
  expandedFeature = expandedFeature === index ? null : index;
}
</script>

<svelte:head>
  <title>Features - AcademiTech</title>
</svelte:head>

<section class="py-24 bg-gray-50">
  <div class="container mx-auto">
    <h2 class="text-4xl font-heading font-bold text-center mb-16">
      <span class="text-primary">Powerful Features</span> for Modern Research
    </h2>

    <p>Don't see something you want? Check out our Roadmap to see upcoming features and vote on them</p>
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each features as feature, index}
        <div class="card hover:shadow-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 fadeinthing" style="animation-delay: {index * 150}ms">
          <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span class="text-2xl">{feature.icon}</span>
          </div>
          <h3 class="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
          <p class="text-gray-600">{feature.description}</p>
          <button
          on:click={() => toggleFeature(index)}
          class="text-primary font-semibold hover:text-secondary transition duration-300"
        >
          {expandedFeature === index ? 'Show Less' : 'Learn More'}
        </button>
        {#if expandedFeature === index}
        <div transition:slide={{ duration: 300, easing: quintOut }} class="p-6 bg-gray-50">
          <p class="text-gray-700 mb-4">{feature.details}</p>
          <img src={feature.image} alt={feature.title} class="w-full rounded-lg shadow-md" />
        </div>
      {/if}
        </div>
      {/each}
    </div> -->

    {#each Object.entries(highlightedFeatures) as [feature_category, features]}
    <section class="mb-16  overflow-hidden">
      <h1>{feature_category}</h1>
      {#each features as feature}
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <img src={feature.image} alt={feature.title} class="w-full h-full object-cover" />
        </div>
        <div class="md:w-1/2 p-8">
          <h2 class="text-3xl font-bold mb-4 text-primary">{feature.title}</h2>
          <p class="text-gray-700 leading-relaxed">{feature.description}</p>
        </div>
      </div>
      {/each}
    </section>
  {/each}
  </div>
</section>

<style>
  h1 {
    text-align: center;
    margin: 4rem 0;
    font-size: 3rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .fadeinthing {
    transition: all 0.3s ease;
    animation: fadeInUp 0.5s ease-out both;
  }

  /* .fadeinthing:hover {
    transform: translateY(-15px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  } */

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .feature-card h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
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
    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
