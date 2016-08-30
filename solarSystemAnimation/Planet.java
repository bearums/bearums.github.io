package solarSystemAnimation;

import java.awt.geom.Ellipse2D;


public class Planet {
	final int AU= 150; // astronomical unit 
	final int year= 1;// earth year. 10s in animation 
	final int eRad=10;
	int a; // semi major axis in AU
	double P; // period in years 
	int r; //radius in earth radii
	java.awt.geom.Ellipse2D.Double image;
	
	
	public Planet(double orbitalradius, double periodinyears, double radinErad){
		a=(int) Math.round(orbitalradius*AU); //must be int as graphics are painted in pixels
		P=  (periodinyears*year);
		r=(int)Math.round( radinErad*eRad); //must be int as graphics are painted in pixels
		image= new  Ellipse2D.Double(a,a,r,r); // ellipse to be drawn in animation
	}


}
