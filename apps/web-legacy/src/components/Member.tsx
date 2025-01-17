import React, { useEffect } from 'react';
import {
    Flex,
    FormControl,
    FormLabel,
    Image,
    Input,
    InputGroup,
    InputRightAddon,
    Text,
    VStack,
} from '@chakra-ui/react';
import addBtn from '../../assets/images/add-square.svg';

interface MemberProps {
    setUsers: React.Dispatch<React.SetStateAction<Array<string>>>;
    githubIds?: Array<string>;
}

const Member = ({ setUsers, githubIds }: MemberProps) => {
    const [members, setMembers] = React.useState<{
        [key: string]: {
            name: string;
        };
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: string) => {
        const values = { ...members };
        values[index].name = e.target.value;
        setMembers(values);
        setUsers(Object.values(values).map((member) => member.name));
    };

    const removeMember = (index: string) => {
        setMembers((prev) => {
            const newMembers = { ...prev };
            delete newMembers[index];
            setUsers(Object.values(newMembers).map((member) => member.name));
            return newMembers;
        });
    };

    const addMember = () => {
        setMembers((prev) => {
            const newMembers = { ...prev };
            newMembers[Date.now() + Math.random()] = {
                name: '',
            };
            setUsers(Object.values(newMembers).map((member) => member.name));
            return newMembers;
        });
    };
    useEffect(() => {
        setMembers(() => {
            const newMembers: any = {};
            if (!githubIds) return newMembers;
            githubIds.forEach((id) => {
                newMembers[Date.now() + Math.random()] = {
                    name: id,
                };
            });
            return newMembers;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <VStack>
            <FormControl>
                <FormLabel color="white">Team Members</FormLabel>
                {Object.entries(members).map((member) => (
                    <InputGroup key={member[0]} width="325px" marginBottom="20px">
                        <Input
                            placeholder="Github Username"
                            size="lg"
                            defaultValue={member[1].name}
                            onChange={(e) => handleChange(e, member[0])}
                            _focus={{
                                boxShadow: '0px 3px 8px rgba(219, 247, 44, 0.15)',
                                border: '1px solid #E9E5E1',
                            }}
                            _placeholder={{
                                textColor: 'rgba(255, 255, 255, 0.25)',
                            }}
                            backgroundColor="rgba(255, 255, 255, 0.25)"
                            textColor="white"
                            border="none"
                            borderRadius="10px"
                        />
                        <InputRightAddon
                            border="none"
                            textColor="#E24C4B"
                            fontFamily="Clash Display"
                            backgroundColor="rgba(255,255,255,0.25)"
                            fontWeight="bold"
                            height="48px"
                            width="auto"
                            onClick={() => {
                                removeMember(member[0]);
                            }}
                        >
                            Remove
                        </InputRightAddon>
                    </InputGroup>
                ))}
            </FormControl>

            {Object.keys(members).length < 3 && (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    paddingInline="20px"
                    paddingBlock="5px"
                    columnGap="10px"
                    width="325px"
                    border="1px solid rgba(219, 247, 44, 0.15)"
                    borderRadius="10px"
                    transition="all 0.2s ease-in-out"
                    background="rgba(219, 247, 44, 0.15)"
                    onClick={() => {
                        addMember();
                    }}
                    _hover={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: '1px dashed #DBF72C',
                    }}
                >
                    <Image height="40px" width="40px" src={addBtn} alt="add" />
                    <Text
                        fontFamily="Clash Display"
                        textColor="#DBF72C"
                        fontSize="14px"
                        fontWeight="medium"
                    >
                        ADD TEAM MEMBER
                    </Text>
                </Flex>
            )}
        </VStack>
    );
};

export default Member;
