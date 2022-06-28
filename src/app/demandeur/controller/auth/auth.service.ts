import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {TokenService} from "../service/token.service";
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  readonly API = "http://localhost:8096";
  private _user = new User();
  private _loadeduser = new User();
  public role: string;
  public error: string = null;
  private _authenticatedUser = new User();
  private _authenticated = <boolean>JSON.parse(localStorage.getItem('autenticated')) || false;
  public _loggedIn = new BehaviorSubject<boolean>(false);
  public loggedInfo$ = this._loggedIn.asObservable();
  public errorRegister: string;
  private connectedChercheur = 'connectedChercheur';

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {
  }

  get loadeduser(): User {
    return this._loadeduser;
  }

  set loadeduser(value: User) {
    this._loadeduser = value;
  }

  public loginUser(username: string, password: string) {
    this.http.post<any>(this.API + '/login', {username, password}, {observe: 'response'}).subscribe(
      resp => {
        console.log("apres")
        this.error = null;
        const jwt = resp.headers.get('Authorization');
        jwt != null ? this.tokenService.saveToken(jwt) : false;
        this.loadInfos();
        // console.log(this.tokenService.getUsername());
        console.log('you are logged in successfully');
        this.router.navigate(['homeDemandeur']);
      }, (error: HttpErrorResponse) => {
        this.error = error.message;
        // mina
        Swal.fire(
          'authentification',
          'authentification',
          'error'

        )
      }
    );
  }

  public logout() {
    this.tokenService.removeToken();
    this.unregisterConnectedUser();
    localStorage.setItem('autenticated', JSON.stringify(false));
    this.authenticated = false;
    this._loggedIn.next(false);
    this._authenticatedUser = new User();
    this.router.navigate(['/loginDemandeur']);
  }

  public loadInfos() {
    const tokenDecoded = this.tokenService.decode();
    const username = tokenDecoded.sub;
    const roles = tokenDecoded.roles;
    const passwordChanged = tokenDecoded.passwordChanged;
    this._authenticatedUser.username = username;
    this._authenticatedUser.authorities = roles;
    this.role = roles;
    localStorage.setItem('autenticated', JSON.stringify(true));
    this.authenticated = true;
    this._loggedIn.next(true);
  }

  public registerConnectedUser(user: User): void {
    localStorage.setItem(this.connectedChercheur, JSON.stringify(user));
  }

  navigate(component: string) {
    this.router.navigate([component]);
  }

  public unregisterConnectedUser(): void {
    localStorage.removeItem(this.connectedChercheur);
  }

  register() {
    return this.http.post<any>(`http://localhost:8096/v1/admin/user/`, this.user).subscribe(
      data => {
        if (data == null) {
          console.log("null");
          Swal.fire(
            'authentification',
            'Désolé, cette adresse email est déjà utilisée',
            'error'

          )
          this.errorRegister = "null";
        } else {
          console.log("good")
          Swal.fire(
            'authentification',
            'Vous avez bien enregistrer ,Conn',
            'success'

          )
          this.router.navigate(['loginDemandeur']);
        }
      }, error => {
        console.log(error);

      }
    )
  }

  public loginAdmin(username: string, password: string) {
    this.http.post<any>(this.API + 'login', {username, password}, {observe: 'response'}).subscribe(
      resp => {
        this.error = null;
        const jwt = resp.headers.get('Authorization');
        jwt != null ? this.tokenService.saveToken(jwt) : false;
        this.loadInfos();
        console.log('you are logged in successfully');
        this.router.navigate(['/admin/accueil']);
      }, (error: HttpErrorResponse) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }

// Getters & Setters
  get authenticated():
    boolean {
    return this._authenticated;
  }

  set authenticated(value: boolean
  ) {
    this._authenticated = value;
  }

  get authenticatedUser(): User {
    return this._authenticatedUser;
  }

  set authenticatedUser(value: User) {
    this._authenticatedUser = value;
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
