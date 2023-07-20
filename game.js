module.exports = {
  "description": "Make decisions to control pollution levels and combat climate change.",
  "pollution_level": 100, 
  "scenarios": [
    {
      "id": 1,
      "description": "Scenario 1: Industrial Regulations\nYou are a government official responsible for industrial regulations. Do you enforce strict emission standards, provide incentives for adopting green technologies, or maintain the status quo?",
      "options": [
        {
          "option": "Enforce strict emission standards",
          "pollution_change": -15,
          "feedback": "Great choice! Implementing strict emission standards reduces pollution from industries significantly."
        },
        {
          "option": "Provide incentives for adopting green technologies",
          "pollution_change": -10,
          "feedback": "Well done! Incentivizing green technologies helps reduce pollution and promote sustainable practices."
        },
        {
          "option": "Maintain the status quo",
          "pollution_change": 5,
          "feedback": "Unfortunately, maintaining the status quo leads to a moderate increase in pollution levels."
        }
      ]
    },
    {
      "id": 2,
      "description": "Scenario 2: Forest Conservation\nYou have the opportunity to protect a large forest area from deforestation. Do you designate it as a protected national park, allow selective logging under strict guidelines, or permit complete deforestation?",
      "options": [
        {
          "option": "Designate it as a protected national park",
          "pollution_change": -18,
          "feedback": "Excellent choice! Protecting the forest as a national park helps preserve biodiversity and reduces pollution."
        },
        {
          "option": "Allow selective logging under strict guidelines",
          "pollution_change": 10,
          "feedback": "Unfortunately, allowing selective logging leads to an increase in pollution and environmental damage."
        },
        {
          "option": "Permit complete deforestation",
          "pollution_change": 25,
          "feedback": "This decision significantly increases pollution and harms the environment. Please reconsider!"
        }
      ]
    },
    {
      "id": 3,
      "description": "Scenario 3: Water Pollution\nYou are responsible for managing a city's water treatment. Do you invest in advanced water treatment technology, impose stricter regulations on industrial waste disposal, or continue with the current treatment methods?",
      "options": [
        {
          "option": "Invest in advanced water treatment technology",
          "pollution_change": -12,
          "feedback": "Well done! Advanced water treatment technology helps reduce water pollution and protects aquatic life."
        },
        {
          "option": "Impose stricter regulations on industrial waste disposal",
          "pollution_change": -8,
          "feedback": "Great choice! Stricter regulations on industrial waste help decrease water pollution."
        },
        {
          "option": "Continue with the current treatment methods",
          "pollution_change": 5,
          "feedback": "Unfortunately, the current treatment methods contribute to a moderate level of water pollution."
        }
      ]
    },
    {
      "id": 4,
      "description": "Scenario 4: Agricultural Practices\nYou are a farmer looking to improve your agricultural practices. Do you adopt organic farming methods, reduce chemical fertilizer usage, or continue conventional farming?",
      "options": [
        {
          "option": "Adopt organic farming methods",
          "pollution_change": -14,
          "feedback": "Excellent choice! Organic farming reduces pollution and promotes soil health."
        },
        {
          "option": "Reduce chemical fertilizer usage",
          "pollution_change": -10,
          "feedback": "Well done! Reducing chemical fertilizer usage helps decrease pollution and water contamination."
        },
        {
          "option": "Continue conventional farming",
          "pollution_change": 8,
          "feedback": "Unfortunately, conventional farming contributes to higher pollution levels and harms the environment."
        }
      ]
    },
    {
      "id": 5,
      "description": "Scenario 5: Urban Development\nYou are a city planner tasked with urban development. Do you prioritize green spaces and sustainable infrastructure, promote high-rise buildings with energy-efficient features, or continue with conventional urban planning?",
      "options": [
        {
          "option": "Prioritize green spaces and sustainable infrastructure",
          "pollution_change": -12,
          "feedback": "Great choice! Green spaces and sustainable infrastructure help reduce pollution and improve the city's livability."
        },
        {
          "option": "Promote high-rise buildings with energy-efficient features",
          "pollution_change": -8,
          "feedback": "Well done! Energy-efficient high-rise buildings contribute to lower pollution levels and energy consumption."
        },
        {
          "option": "Continue with conventional urban planning",
          "pollution_change": 10,
          "feedback": "Unfortunately, conventional urban planning increases pollution and may lead to environmental issues."
        }
      ]
    },
    {
      "id": 6,
      "description": "Scenario 6: Air Travel\nYou are an airline executive. Do you invest in fuel-efficient aircraft, impose a carbon offset program for flights, or continue with existing planes?",
      "options": [
        {
          "option": "Invest in fuel-efficient aircraft",
          "pollution_change": -20,
          "feedback": "Excellent choice! Fuel-efficient aircraft help reduce emissions and lower pollution from air travel."
        },
        {
          "option": "Impose a carbon offset program for flights",
          "pollution_change": -10,
          "feedback": "Well done! A carbon offset program helps counterbalance the emissions from air travel."
        },
        {
          "option": "Continue with existing planes",
          "pollution_change": 15,
          "feedback": "Unfortunately, continuing with existing planes leads to increased pollution from air travel."
        }
      ]
    },
    {
      "id": 7,
      "description": "Scenario 7: Consumer Choices\nYou are a consumer with the power to make sustainable choices. Do you buy products with eco-friendly certifications, reduce single-use plastic consumption, or stick to conventional products?",
      "options": [
        {
          "option": "Buy products with eco-friendly certifications",
          "pollution_change": -10,
          "feedback": "Great choice! Purchasing eco-friendly products reduces pollution and supports sustainable practices."
        },
        {
          "option": "Reduce single-use plastic consumption",
          "pollution_change": -8,
          "feedback": "Well done! Reducing single-use plastic consumption helps decrease pollution and marine debris."
        },
        {
          "option": "Stick to conventional products",
          "pollution_change": 10,
          "feedback": "Unfortunately, sticking to conventional products contributes to higher pollution levels."
        }
      ]
    },
    {
      "id": 8,
      "description": "Scenario 8: Renewable Energy Investment\nYou are an investor looking to fund energy projects. Do you invest in solar and wind energy projects, support research on clean energy technologies, or continue investing in fossil fuels?",
      "options": [
        {
          "option": "Invest in solar and wind energy projects",
          "pollution_change": -15,
          "feedback": "Excellent choice! Investing in renewable energy projects helps reduce pollution and combat climate change."
        },
        {
          "option": "Support research on clean energy technologies",
          "pollution_change": -10,
          "feedback": "Well done! Research on clean energy technologies paves the way for a more sustainable future."
        },
        {
          "option": "Continue investing in fossil fuels",
          "pollution_change": 20,
          "feedback": "Unfortunately, continuing to invest in fossil fuels increases pollution and perpetuates environmental challenges."
        }
      ]
    },
    {
      "id": 9,
      "description": "Scenario 9: Plastic Waste Management\nYou are a waste management coordinator. Do you implement a plastic recycling program, ban single-use plastics, or maintain the current waste management practices?",
      "options": [
        {
          "option": "Implement a plastic recycling program",
          "pollution_change": -12,
          "feedback": "Great choice! A plastic recycling program helps reduce pollution from plastic waste."
        },
        {
          "option": "Ban single-use plastics",
          "pollution_change": -15,
          "feedback": "Excellent choice! Banning single-use plastics significantly decreases pollution and plastic waste."
        },
        {
          "option": "Maintain the current waste management practices",
          "pollution_change": 10,
          "feedback": "Unfortunately, the current waste management practices contribute to moderate pollution levels."
        }
      ]
    },
    {
      "id": 10,
      "description": "Scenario 10: Climate Education\nYou are an educator. Do you include climate change and environmental topics in the curriculum, organize awareness campaigns, or continue with the standard curriculum?",
      "options": [
        {
          "option": "Include climate change and environmental topics in the curriculum",
          "pollution_change": -10,
          "feedback": "Great choice! Including climate and environmental topics in the curriculum raises awareness and fosters eco-consciousness."
        },
        {
          "option": "Organize awareness campaigns",
          "pollution_change": -8,
          "feedback": "Well done! Awareness campaigns help educate the public and promote responsible behavior."
        },
        {
          "option": "Continue with the standard curriculum",
          "pollution_change": 5,
          "feedback": "Unfortunately, without a focus on climate education, pollution levels may remain unchanged."
        }
      ]
    }
  ]
}