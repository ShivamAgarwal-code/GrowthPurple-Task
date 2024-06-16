const tests = [
    {
        testId: '1231232',
        time: "12:12",
        testTitle: 'Reading and writing: Module 1',
        domain : 'TEST 1',
        questions: [
            {
                id: '123213',
                title: 'wewqeqwewqe wqewqe wqe wqe wqe',
                description: '213213 213123 213 213 123',
                options: [
                    {
                        title: 'true',
                        value: 'true'
                    }
                ],
                review: false,
                answered: false,
            }
        ]
    },
    {
        testId: '4564567',
        time: "45:12",
        testTitle: 'Mathematics: Module 2',
        domain : 'TEST 2',
        questions: [
            {
                id: '789789',
                title: 'Solve for x: 2x + 3 = 15',
                description: 'Solve the linear equation to find the value of x.',
                options: [
                    {
                        title: 'x = 5',
                        value: 'true'
                    },
                    {
                        title: 'x = 6',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '101112',
                title: 'Calculate the area of a circle with radius 3',
                description: 'Use the formula A = πr².',
                options: [
                    {
                        title: '28.27',
                        value: 'true'
                    },
                    {
                        title: '26.50',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            }
        ]
    },
    {
        testId: '7897891',
        time: "60:12",
        testTitle: 'Science: Module 3',
        domain : 'TEST 3',
        questions: [
            {
                id: '121314',
                title: 'What is the chemical symbol for water?',
                description: 'Choose the correct chemical symbol.',
                options: [
                    {
                        title: 'H2O',
                        value: 'true'
                    },
                    {
                        title: 'HO2',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '151617',
                title: 'Which planet is known as the Red Planet?',
                description: 'Select the correct planet.',
                options: [
                    {
                        title: 'Mars',
                        value: 'true'
                    },
                    {
                        title: 'Venus',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '181920',
                title: 'What gas do plants absorb from the atmosphere?',
                description: 'Select the correct gas.',
                options: [
                    {
                        title: 'Carbon Dioxide',
                        value: 'true'
                    },
                    {
                        title: 'Oxygen',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            }
        ]
    },
    {
        testId: '2342348',
        time: "50:12",
        testTitle: 'History: Module 4',
        domain : 'TEST 5',
        questions: [
            {
                id: '212223',
                title: 'Who was the first President of the United States?',
                description: 'Select the correct individual.',
                options: [
                    {
                        title: 'George Washington',
                        value: 'true'
                    },
                    {
                        title: 'Thomas Jefferson',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '242526',
                title: 'In which year did World War II end?',
                description: 'Select the correct year.',
                options: [
                    {
                        title: '1945',
                        value: 'true'
                    },
                    {
                        title: '1939',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            }
        ]
    },
    {
        testId: '3453459',
        time: "40:12",
        testTitle: 'Geography: Module 5',
        domain : 'TEST 6',
        questions: [
            {
                id: '272829',
                title: 'What is the capital of France?',
                description: 'Select the correct city.',
                options: [
                    {
                        title: 'Paris',
                        value: 'true'
                    },
                    {
                        title: 'London',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '303132',
                title: 'Which is the largest ocean on Earth?',
                description: 'Select the correct ocean.',
                options: [
                    {
                        title: 'Pacific Ocean',
                        value: 'true'
                    },
                    {
                        title: 'Atlantic Ocean',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            }
        ]
    },
    // New Math Test for 5th Class Student
    {
        testId: '5675670',
        time: "60:12",
        testTitle: 'Mathematics: 5th Grade',
        domain : 'TEST 1',
        questions: [
            {
                id: '333444',
                title: 'What is 7 x 8?',
                description: 'Multiply the numbers to find the product.',
                options: [
                    {
                        title: '56',
                        value: 'true'
                    },
                    {
                        title: '54',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '555666',
                title: 'Solve: 45 / 5',
                description: 'Divide the numbers to find the quotient.',
                options: [
                    {
                        title: '9',
                        value: 'true'
                    },
                    {
                        title: '8',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '777888',
                title: 'What is the perimeter of a rectangle with length 5 and width 3?',
                description: 'Use the formula P = 2(l + w).',
                options: [
                    {
                        title: '16',
                        value: 'true'
                    },
                    {
                        title: '15',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '999000',
                title: 'What is 12% of 50?',
                description: 'Calculate the percentage of the number.',
                options: [
                    {
                        title: '6',
                        value: 'true'
                    },
                    {
                        title: '5',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            },
            {
                id: '111222',
                title: 'What is the value of the expression: 2 + 3 x 4?',
                description: 'Use the order of operations (PEMDAS) to solve.',
                options: [
                    {
                        title: '14',
                        value: 'true'
                    },
                    {
                        title: '20',
                        value: 'false'
                    }
                ],
                review: false,
                answered: false,
            }
        ]
    }
];

export default tests;
