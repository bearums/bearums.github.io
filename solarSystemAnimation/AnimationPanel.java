package solarSystemAnimation;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.geom.Ellipse2D;

import javax.swing.Timer;
import javax.swing.*;
/**
 * JPanel containing a rotating square
 * that can be stopped and started.
 */
public class AnimationPanel extends JPanel implements ActionListener {
	private Polygon shape;        // shape to be displayed
	
	
	
	private final int delay = 50; // delay in ms between steps
	private final double delta;   // angle to rotate in each step
	private double angle = 0.0;   // current angle of shape on screen
	private Timer animationTimer; // timer controlling frame rate
	
	int R_sun= 100; //radius of sun
	
	// initiate planet names 
	static Planet Earth;
	static Planet Mars;
	static Planet Venus;
	static Planet Mercury;
	static Planet Moon;

	
	// initiates Planet objects
	public static void generatePlanets(){
		Earth= new Planet( 1,1,1); //earth, semi-major axis= 1AU, period=1yr, radius=1 Earth radii
		Mars= new Planet(1.52, 1.88,0.5);// mars, semi-major axis=1.52AU, period=1.88yr , radius=0.5 earth radii
		Venus= new Planet( 0.72, 0.62, 0.95);
		Mercury= new Planet( 0.38, 0.24, 0.38);
		Moon= new Planet(0.1, 1/12,0.27 );
	}
	
	
AnimationPanel(int width, int height, double rotationTime) {
  setPreferredSize(new Dimension(width,height));
  delta = 2*Math.PI*delay/(rotationTime*1000);
  animationTimer = new Timer(delay,this);
  animationTimer.start();
}

/** Paint shape at appropriate angle. */
protected void paintComponent(Graphics g) {
  super.paintComponent(g);
  int height = getHeight();
  int width = getWidth();
  // Fill in background
  g.setColor(Color.BLACK);
  g.fillRect(0, 0, width, height);
  // Now move origin to centre of panel
  g.translate(width/2, height/2);
 
  
  //draw sun
  g.setColor(Color.YELLOW);
  g.fillOval(-R_sun/2, -R_sun/2, R_sun, R_sun);
 
 
  //draw earth 
  g.setColor(Color.GREEN);
  circularOrbit(Earth,angle/Earth.P);
  g.fillOval((int)Earth.image.x,(int) Earth.image.y, Earth.r, Earth.r);
  
  //draw mars
  g.setColor(Color.ORANGE);
  circularOrbit(Mars ,angle/Mars.P);
  g.fillOval((int)Mars.image.x,(int) Mars.image.y, Mars.r, Mars.r);
  
  //venus
  g.setColor(Color.WHITE);
  circularOrbit(Venus, angle/Venus.P);
  g.fillOval((int)Venus.image.x,(int) Venus.image.y, Venus.r, Venus.r);
  
  //mercury
  g.setColor(Color.RED);
  circularOrbit(Mercury, angle/Mercury.P);
  g.fillOval((int)Mercury.image.x,(int) Mercury.image.y, Mercury.r, Mercury.r);
  
  
  //MOON	
  g.setColor(Color.LIGHT_GRAY);
  Moon.image.x= Earth.image.x+0.5* Earth.r+ Moon.a*Math.cos(angle*12);
  Moon.image.y=Earth.image.y+ 0.5*Earth.r + Moon.a*Math.sin(angle*12);
  g.fillOval((int)Moon.image.x,(int) Moon.image.y, Moon.r, Moon.r);
  
}



// sets the position of planet to be a point on a circular orbit. angle sets where the point is
private void circularOrbit(Planet planet, double angle){
	planet.image.x=planet.a*Math.cos(angle); // set x coord
	planet.image.y=planet.a*Math.sin(angle); // set y coord

}



/**
 * This is called by the animation Timer object
 * at regular intervals to rotate the shape and
 * update the display.
 */
public void actionPerformed(ActionEvent event) {
  angle -= delta;
  repaint();
}

/** Start the animation */
public void start() {animationTimer.start();}

/** Stop the animation */
public void stop() {animationTimer.stop();}
}