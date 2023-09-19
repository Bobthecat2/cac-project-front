type Post = {
    id: string;
    title: string;
    category: 'tips' | 'campaign';
};

export const posts: Post[] = [
    // Tips Posts
    { id: '1', title: 'Stay hydrated during extreme heat', category: 'tips' },
    {
        id: '2',
        title: 'Find local cooling shelters in your area',
        category: 'tips',
    },
    {
        id: '3',
        title: 'Wear loose-fitting, light-colored clothing in hot weather',
        category: 'tips',
    },
    {
        id: '4',
        title: 'Conserve energy to prevent power outages',
        category: 'tips',
    },
    {
        id: '5',
        title: 'Know the signs of heat-related illnesses',
        category: 'tips',
    },
    {
        id: '6',
        title: 'Protect pets and plants during temperature swings',
        category: 'tips',
    },
    {
        id: '7',
        title: 'Check on neighbors, especially the elderly during heatwaves',
        category: 'tips',
    },
    {
        id: '8',
        title: 'Store an emergency kit in your car for sudden weather changes',
        category: 'tips',
    },

    // Campaign Posts
    {
        id: '9',
        title: 'Community Cleanup Day - Join Us!',
        category: 'campaign',
    },
    {
        id: '10',
        title: 'Fundraiser for Local Homeless Shelter',
        category: 'campaign',
    },
    {
        id: '11',
        title: 'Tree Planting Event This Saturday',
        category: 'campaign',
    },
    {
        id: '12',
        title: 'Workshop: Sustainable Living in Urban Areas',
        category: 'campaign',
    },
    {
        id: '13',
        title: 'Awareness Walk for Climate Change',
        category: 'campaign',
    },
    {
        id: '14',
        title: 'Petition: More Green Spaces in Downtown',
        category: 'campaign',
    },
    {
        id: '15',
        title: 'Recycling Drive - Help Us Make a Change',
        category: 'campaign',
    },
    {
        id: '16',
        title: 'Join our community gardening initiative!',
        category: 'campaign',
    },
    {
        id: '17',
        title: 'Be cautious of strong winds and flying debris',
        category: 'tips',
    },
    {
        id: '18',
        title: 'Have a disaster plan in place',
        category: 'tips',
    },
    {
        id: '19',
        title: 'Protect your home from potential flood damage',
        category: 'tips',
    },
    {
        id: '20',
        title: 'Educate your family on the dangers of severe weather',
        category: 'tips',
    },
    {
        id: '21',
        title: 'Fundraiser for Children’s Hospital',
        category: 'campaign',
    },
    {
        id: '22',
        title: 'Animal Shelter Adoption Event',
        category: 'campaign',
    },
    {
        id: '23',
        title: 'Community Garden Expansion Project',
        category: 'campaign',
    },
    {
        id: '24',
        title: 'Donation Drive for School Supplies',
        category: 'campaign',
    },
    {
        id: '25',
        title: 'Beach Cleanup Day',
        category: 'campaign',
    },
    {
        id: '26',
        title: 'Free Community Yoga Session',
        category: 'campaign',
    },
];
