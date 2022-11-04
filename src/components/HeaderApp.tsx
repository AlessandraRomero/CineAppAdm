import {HeaderNavigation, ALIGN, StyledNavigationList, StyledNavigationItem} from 'baseui/header-navigation';
import {StyledLink} from 'baseui/link';
import {Button} from 'baseui/button';
import { Link } from 'react-router-dom';

export function HeaderApp(){
    return (
        <HeaderNavigation
        >
          <StyledNavigationList $align={ALIGN.left}>
            <StyledNavigationItem>
              <Link to='/'>
              Cine App
              </Link>
            </StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.center} />
          <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <StyledLink href="#basic-link1">
                <Link to='/categorias'>
                  Categorias
                </Link>
              </StyledLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <StyledLink href="#basic-link2">
                Tab Link Two
              </StyledLink>
            </StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <Button>Get started</Button>
            </StyledNavigationItem>
          </StyledNavigationList>
        </HeaderNavigation>
    )
}