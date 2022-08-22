import { Number, Text } from './Header.styles';

interface HeaderProps {
    text: string;
    number: string;
}

export const Header = ({ text, number }: HeaderProps) => {
    return (
        <Text>
            <Number>{number}</Number> {text}
        </Text>
    );
};
