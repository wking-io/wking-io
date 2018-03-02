module Main exposing (main)

import Html exposing (..)
import Html.Events exposing (onClick)
import Navigation exposing (Location)
import Route exposing (Route)
import Util exposing ((=>))


main : Program Never Model Msg
main =
    Navigation.program (Route.fromLocation >> SetRoute)
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL --


type Page
    = Blank
    | Home
    | Login


type alias Model =
    { currentPage : Page }


init : Location -> ( Model, Cmd Msg )
init location =
    setRoute (Route.fromLocation location) { currentPage = initialPage }


initialPage : Page
initialPage =
    Blank



-- VIEW --


view : Model -> Html Msg
view model =
    div []
        [ viewMenu
        , h1 [] [ text "Hello world!" ]
        , viewPage model
        ]


viewPage : Model -> Html Msg
viewPage model =
    let
        content =
            case model.currentPage of
                Blank ->
                    text ""

                Home ->
                    text "Home"

                Login ->
                    text "Login"
    in
        div [] [ content ]


viewMenu : Html Msg
viewMenu =
    div []
        [ button [ onClick (LinkTo "#home") ] [ text "Home" ]
        , button [ onClick (LinkTo "#login") ] [ text "Login" ]
        ]



-- UPDATE --


type Msg
    = SetRoute (Maybe Route)
    | LinkTo String


setRoute : Maybe Route -> Model -> ( Model, Cmd Msg )
setRoute maybeRoute model =
    case maybeRoute of
        Nothing ->
            { model | currentPage = Home } => Cmd.none

        Just Route.Home ->
            { model | currentPage = Home } => Cmd.none

        Just Route.Root ->
            { model | currentPage = Home } => Cmd.none

        Just Route.Login ->
            { model | currentPage = Login } => Cmd.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetRoute route ->
            setRoute route model

        LinkTo path ->
            ( model, Navigation.newUrl path )



-- SUBSCRIPTIONS --


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
