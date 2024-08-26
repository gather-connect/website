import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const people = [
    {
        id: 'person-1',
        name: 'Aryan',
        role: 'CEO',
        avatar: '../../images/team/aryan.svg',
    },
    {
        id: 'person-2',
        name: 'Solomon',
        role: 'CTO',
        avatar: '../../images/team/solomon.svg',
    },
    {
        id: 'person-3',
        name: 'Barakha',
        role: 'CFO',
        avatar: '../../images/team/barahka.svg',
    },
    {
        id: 'person-4',
        name: 'Enkang',
        role: 'Engineer',
        avatar: '../../images/team/enkang.svg',
    },
]

const Team = () => {
    return (
        <section className='py-32'>
            <div className='container flex flex-col items-center text-center'>
                <h2 className='my-6 text-pretty text-2xl font-bold lg:text-4xl'>
                    Meet our team
                </h2>
                <p className='mb-8 max-w-3xl text-muted-foreground lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Elig doloremque mollitia fugiat omnis! Porro facilis quo
                    animi consequatur. Explicabo.
                </p>
            </div>
            <div className='container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4'>
                {people.map((person) => (
                    <div key={person.id} className='flex flex-col items-center'>
                        <Avatar className='mb-4 size-20 border md:mb-5 lg:size-24'>
                            <AvatarImage src={person.avatar} />
                            <AvatarFallback>{person.name}</AvatarFallback>
                        </Avatar>
                        <p className='text-center font-medium'>{person.name}</p>
                        <p className='text-center text-muted-foreground'>
                            {person.role}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Team
