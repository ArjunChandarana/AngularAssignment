import { LoginComponent } from './login.component';

class MockAuthService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('LoginComponent with fake Class', () => {
  let component: LoginComponent;
  let service: MockAuthService;
 
  beforeEach(() => {
    service = new MockAuthService();    
    component = new LoginComponent(service);
  });

  it('needsLogin returns true when the user has not been authenticated', () => {
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });
});