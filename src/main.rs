#![feature(proc_macro_hygiene, decl_macro)]

use rocket_contrib::serve::StaticFiles;
use rocket::{Request, Response};
use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::Header;
use log::{info};

#[macro_use] extern crate rocket;


pub struct CORS;

impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to responses",
            kind: Kind::Response
        }
    }

    fn on_response(&self, request: &Request, response: &mut Response) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS"));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

fn main() {
    info!("Starting server...");
    info!(env!("CARGO_MANIFEST_DIR"));
    rocket::ignite()
    .attach(CORS)
    .mount("/", StaticFiles::from(concat!(env!("CARGO_MANIFEST_DIR"), "/client/app.html"))).launch();
}