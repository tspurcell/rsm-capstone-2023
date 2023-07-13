import { computed, ref } from "vue";

const profiles = ref([
    {
        profile_id: 1,
        first_name: 'James',
        last_name: 'Smith',
        current_class: 'Senior',
        university: 'Private University',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 2,
        first_name: 'Robert',
        last_name: 'Johnson',
        current_class: 'Senior',
        university: 'Public University',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla 
        molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo 
        ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam 
        odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. 
        Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. 
        Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.`
    },
    {
        profile_id: 3,
        first_name: 'Patricia',
        last_name: 'Williams',
        current_class: 'Senior',
        university: 'Community College',
        major: 'Nursing',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 4,
        first_name: 'Mary',
        last_name: 'Brown',
        current_class: 'Sophomore',
        university: 'Public University',
        major: 'Nursing',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 5,
        first_name: 'Jennifer',
        last_name: 'Jones',
        current_class: 'Junior',
        university: 'Public University',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 6,
        first_name: 'Linda',
        last_name: 'Garcia',
        current_class: 'Senior',
        university: 'Private University',
        major: 'Health Care Management',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 7,
        first_name: 'Michael',
        last_name: 'Miller',
        current_class: 'Sophomore',
        university: 'Public University',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 8,
        first_name: 'Elizabeth',
        last_name: 'Davis',
        current_class: 'Junior',
        university: 'Ivy League School',
        major: 'Nursing',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 9,
        first_name: 'David',
        last_name: 'Rodriguez',
        current_class: 'Senior',
        university: 'Public University',
        major: 'Nursing',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 10,
        first_name: 'Barbara',
        last_name: 'Wilson',
        current_class: 'Senior',
        university: 'Public University',
        major: 'Nursing',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 11,
        first_name: 'Susan',
        last_name: 'Lopez',
        current_class: 'Sophomore',
        university: 'Private University',
        major: 'Health Care Management',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 12,
        first_name: 'Jessica',
        last_name: 'Hernandez',
        current_class: 'Senior',
        university: 'Public University',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 13,
        first_name: 'William',
        last_name: 'Anderson',
        current_class: 'Senior',
        university: 'Ivy League School',
        major: 'Biology',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 14,
        first_name: 'Richard',
        last_name: 'Thomas',
        current_class: 'Junior',
        university: 'Public University',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 15,
        first_name: 'Sarah',
        last_name: 'Lee',
        current_class: 'Sophomore',
        university: 'Private University',
        major: 'Health Care Management',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 16,
        first_name: 'Karen',
        last_name: 'Martin',
        current_class: 'Senior',
        university: 'Public University',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 17,
        first_name: 'Joseph',
        last_name: 'Perez',
        current_class: 'Junior',
        university: 'Public University',
        major: 'Nursing',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 18,
        first_name: 'Lisa',
        last_name: 'Young',
        current_class: 'Senior',
        university: 'Ivy League School',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 19,
        first_name: 'Thomas',
        last_name: 'Lewis',
        current_class: 'Senior',
        university: 'Private University',
        major: 'Nursing',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 20,
        first_name: 'Nancy',
        last_name: 'Wright',
        current_class: 'Sophomore',
        university: 'Community College',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 21,
        first_name: 'Christopher',
        last_name: 'King',
        current_class: 'Senior',
        university: 'Public University',
        major: 'Health Care Management',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 22,
        first_name: 'Sandra',
        last_name: 'Adams',
        current_class: 'Senior',
        university: 'Public University',
        major: 'Biology',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 23,
        first_name: 'Ashley',
        last_name: 'Carter',
        current_class: 'Senior',
        university: 'Private University',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 24,
        first_name: 'Charles',
        last_name: 'Roberts',
        current_class: 'Junior',
        university: 'Community College',
        major: 'Health Care Management',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        profile_id: 25,
        first_name: 'Emily',
        last_name: 'Reyes',
        current_class: 'Senior',
        university: 'Public University',
        major: 'Nursing',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc,nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis,a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    }
]);

const formatted_profiles = computed(() => profiles.value.map(x => ({ ...x, full_name: `${ x.first_name } ${ x.last_name }` })))

export default () => {
    return {
        profiles: formatted_profiles
    }
}
