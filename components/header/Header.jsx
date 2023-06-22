import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { StyledHeader, Container, Logo, Nav } from "./styles";

const Header = () => {
    const { auth, logout } = useAuth();

    return (
        <StyledHeader>
            <Container>
                <Logo>
                    <Link href="/">
                        <span>File</span>
                        Transfer
                    </Link>
                </Logo>

                <Nav>
                    <ul>
                        {auth ? (
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link href="/register">Register</Link>
                                </li>
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </Nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
